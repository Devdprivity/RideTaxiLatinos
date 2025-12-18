'use client';

import { useState, useEffect, useRef } from 'react';

type ServiceType = 'passenger' | 'food' | 'liquor';
type FoodOption = 'ready' | 'wait';

interface AddressSuggestion {
  display_name: string;
  lat: string;
  lon: string;
}

export default function PriceCalculator() {
  const [serviceType, setServiceType] = useState<ServiceType>('passenger');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [foodOption, setFoodOption] = useState<FoodOption>('ready');
  const [price, setPrice] = useState<number | null>(null);
  const [distance, setDistance] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Autocompletado
  const [originSuggestions, setOriginSuggestions] = useState<AddressSuggestion[]>([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState<AddressSuggestion[]>([]);
  const [showOriginSuggestions, setShowOriginSuggestions] = useState(false);
  const [showDestinationSuggestions, setShowDestinationSuggestions] = useState(false);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);

  // Modal de pedido
  const [showModal, setShowModal] = useState(false);
  const [modalStep, setModalStep] = useState<'name' | 'confirm'>('name');
  const [userName, setUserName] = useState('');

  const originRef = useRef<HTMLDivElement>(null);
  const destinationRef = useRef<HTMLDivElement>(null);

  // Cerrar sugerencias cuando se hace clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (originRef.current && !originRef.current.contains(event.target as Node)) {
        setShowOriginSuggestions(false);
      }
      if (destinationRef.current && !destinationRef.current.contains(event.target as Node)) {
        setShowDestinationSuggestions(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Cerrar modal con tecla ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showModal]);

  // Buscar sugerencias de direcciones
  const searchAddressSuggestions = async (query: string, isOrigin: boolean) => {
    if (query.length < 3) {
      if (isOrigin) {
        setOriginSuggestions([]);
        setShowOriginSuggestions(false);
      } else {
        setDestinationSuggestions([]);
        setShowDestinationSuggestions(false);
      }
      return;
    }

    setLoadingSuggestions(true);

    try {
      const url = new URL('https://nominatim.openstreetmap.org/search');
      url.searchParams.append('q', query);
      url.searchParams.append('format', 'json');
      url.searchParams.append('limit', '5');
      url.searchParams.append('addressdetails', '1');

      const response = await fetch(url.toString(), {
        headers: {
          'User-Agent': 'RideTaxi App'
        }
      });

      if (!response.ok) {
        console.error('Nominatim error:', response.status);
        return;
      }

      const data = await response.json();

      if (isOrigin) {
        setOriginSuggestions(data);
        setShowOriginSuggestions(true);
      } else {
        setDestinationSuggestions(data);
        setShowDestinationSuggestions(true);
      }
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    } finally {
      setLoadingSuggestions(false);
    }
  };

  // Debounce para las búsquedas
  useEffect(() => {
    const timer = setTimeout(() => {
      if (origin.length >= 3) {
        searchAddressSuggestions(origin, true);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [origin]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (destination.length >= 3) {
        searchAddressSuggestions(destination, false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [destination]);

  const selectOriginSuggestion = (suggestion: AddressSuggestion) => {
    setOrigin(suggestion.display_name);
    setShowOriginSuggestions(false);
  };

  const selectDestinationSuggestion = (suggestion: AddressSuggestion) => {
    setDestination(suggestion.display_name);
    setShowDestinationSuggestions(false);
  };

  const openModal = () => {
    setShowModal(true);
    setModalStep('name');
    setUserName('');
    setError('');
  };

  const handleNextStep = () => {
    if (!userName.trim()) {
      setError('Por favor ingresa tu nombre completo');
      return;
    }

    // Validar que tenga al menos nombre y apellido (2 palabras)
    const nameParts = userName.trim().split(/\s+/); // Divide por espacios
    if (nameParts.length < 2) {
      setError('Por favor ingresa tu nombre y apellido');
      return;
    }

    // Validar que cada parte tenga al menos 2 caracteres
    const hasValidParts = nameParts.every(part => part.length >= 2);
    if (!hasValidParts) {
      setError('El nombre y apellido deben tener al menos 2 caracteres cada uno');
      return;
    }

    setError('');
    setModalStep('confirm');
  };

  const handleSendToWhatsApp = () => {
    const phoneNumber = '19415578000'; // +1 941 557 8000

    const serviceNames = {
      passenger: 'Transporte de pasajero',
      food: foodOption === 'ready' ? 'Delivery de comida (lista)' : 'Delivery de comida (pedir y esperar)',
      liquor: 'Delivery de licor'
    };

    const message = `Hola, soy *${userName}*.\n\n` +
      `Quiero solicitar un servicio:\n\n` +
      `🚗 *Servicio:* ${serviceNames[serviceType]}\n` +
      `📍 *Origen:* ${origin}\n` +
      `📌 *Destino:* ${destination}\n` +
      `💵 *Precio calculado:* $${price?.toFixed(2)} USD\n` +
      (distance !== null && serviceType === 'passenger' ? `📏 *Distancia:* ${distance.toFixed(2)} millas\n\n` : '\n') +
      `¿Pueden confirmar disponibilidad?`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setShowModal(false);

    // Opcional: resetear el formulario después de enviar
    // setPrice(null);
    // setDistance(null);
    // setOrigin('');
    // setDestination('');
  };

  const calculatePrice = async () => {
    if (!origin || !destination) {
      setError('Por favor ingresa origen y destino');
      return;
    }

    setLoading(true);
    setError('');
    setPrice(null);
    setDistance(null);

    try {
      console.log('Calculating distance from:', origin, 'to:', destination);
      
      // Llamar a la API route para calcular la distancia
      const response = await fetch('/api/calculate-distance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          origin,
          destination,
        }),
      });

      console.log('API response status:', response.status, response.statusText);

      if (!response.ok) {
        let errorMessage = 'Error al calcular la distancia';
        try {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const errorData = await response.json();
            console.error('API error:', errorData);
            errorMessage = errorData.details || errorData.error || errorMessage;
          } else {
            const errorText = await response.text();
            console.error('API error (not JSON):', errorText);
            errorMessage = errorText || `Error del servidor (${response.status})`;
          }
        } catch (parseError) {
          console.error('Error parsing API response:', parseError);
          errorMessage = `Error del servidor (${response.status})`;
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      const miles = data.distance; // distancia en millas
      setDistance(miles);

      let calculatedPrice = 0;

      if (serviceType === 'passenger') {
        // Cálculo para pasajeros
        if (miles <= 4) {
          // Tarifa normal: $3.00 fijo + $2.00 por milla
          calculatedPrice = 3.00 + (2.00 * miles);
          // Mínimo $7.00
          if (calculatedPrice < 7.00) {
            calculatedPrice = 7.00;
          }
        } else {
          // Distancias extendidas (más de 4 millas)
          // $3.00 + ($2.00 * Millas) + ($2.00 * (Millas - 4))
          calculatedPrice = 3.00 + (2.00 * miles) + (2.00 * (miles - 4));
        }
      } else if (serviceType === 'liquor') {
        // Delivery de licor: $15.00 fijo
        calculatedPrice = 15.00;
      } else if (serviceType === 'food') {
        // Delivery de comida
        if (foodOption === 'ready') {
          // Comida lista para recoger: $11.00
          calculatedPrice = 11.00;
        } else {
          // Hay que pedir y esperar: $15.00
          calculatedPrice = 15.00;
        }
      }

      setPrice(calculatedPrice);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'No se pudo calcular el precio. Intenta de nuevo.';
      setError(errorMessage);
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white border-opacity-20">
      <h2 className="text-2xl font-bold text-[#25d1ab] mb-6">Cotiza tu servicio</h2>

      {/* Selector de tipo de servicio */}
      <div className="space-y-4 mb-6">
        <label className="block text-sm font-medium text-[#25d1ab]">Tipo de servicio</label>
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => setServiceType('passenger')}
            className={`py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
              serviceType === 'passenger'
                ? 'bg-turquoise text-white shadow-lg'
                : 'bg-navy bg-opacity-40 text-white hover:bg-opacity-60 border border-turquoise border-opacity-20'
            }`}
          >
            Pasajero
          </button>
          <button
            onClick={() => setServiceType('food')}
            className={`py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
              serviceType === 'food'
                ? 'bg-turquoise text-white shadow-lg'
                : 'bg-navy bg-opacity-40 text-white hover:bg-opacity-60 border border-turquoise border-opacity-20'
            }`}
          >
            Comida
          </button>
          <button
            onClick={() => setServiceType('liquor')}
            className={`py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
              serviceType === 'liquor'
                ? 'bg-turquoise text-white shadow-lg'
                : 'bg-navy bg-opacity-40 text-white hover:bg-opacity-60 border border-turquoise border-opacity-20'
            }`}
          >
            Licor
          </button>
        </div>
      </div>

      {/* Opción adicional para comida */}
      {serviceType === 'food' && (
        <div className="space-y-4 mb-6">
          <label className="block text-sm font-medium text-white">Tipo de pedido</label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setFoodOption('ready')}
              className={`py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
                foodOption === 'ready'
                  ? 'bg-turquoise text-white shadow-lg'
                  : 'bg-navy bg-opacity-40 text-white hover:bg-opacity-60 border border-turquoise border-opacity-20'
              }`}
            >
              Listo para recoger
            </button>
            <button
              onClick={() => setFoodOption('wait')}
              className={`py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
                foodOption === 'wait'
                  ? 'bg-turquoise text-white shadow-lg'
                  : 'bg-navy bg-opacity-40 text-white hover:bg-opacity-60 border border-turquoise border-opacity-20'
              }`}
            >
              Pedir y esperar
            </button>
          </div>
        </div>
      )}

      {/* Campos de origen y destino */}
      <div className="space-y-4 mb-6">
        <div ref={originRef} className="relative">
          <label className="block text-sm font-medium text-[#25d1ab] mb-2">
            <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="3" />
            </svg>
            Origen
          </label>
          <div className="relative">
            <input
              type="text"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              onFocus={() => origin.length >= 3 && setShowOriginSuggestions(true)}
              placeholder="Ej: Miami, FL o 123 Main St, Miami, FL"
              className="w-full px-4 py-3 bg-navy bg-opacity-50 border border-turquoise border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-turquoise focus:bg-opacity-70"
            />
            {loadingSuggestions && origin.length >= 3 && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="animate-spin h-5 w-5 text-turquoise" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              </div>
            )}
          </div>

          {/* Dropdown de sugerencias de origen */}
          {showOriginSuggestions && (
            <div className="absolute z-50 w-full mt-1 bg-navy border border-turquoise border-opacity-30 rounded-lg shadow-2xl max-h-60 overflow-y-auto">
              {originSuggestions.length > 0 ? (
                originSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => selectOriginSuggestion(suggestion)}
                    className="w-full text-left px-4 py-3 hover:bg-turquoise hover:bg-opacity-20 text-white text-sm border-b border-white border-opacity-10 last:border-0 transition-colors"
                  >
                    <div className="flex items-start">
                      <svg className="w-4 h-4 mr-2 mt-0.5 shrink-0 text-turquoise" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="line-clamp-2">{suggestion.display_name}</span>
                    </div>
                  </button>
                ))
              ) : (
                !loadingSuggestions && (
                  <div className="px-4 py-3 text-white text-sm text-center opacity-70">
                    No se encontraron direcciones. Intenta con otra búsqueda.
                  </div>
                )
              )}
            </div>
          )}

          {origin.length > 0 && origin.length < 3 && (
            <p className="text-xs text-white/50 mt-1">Escribe al menos 3 caracteres para buscar</p>
          )}
        </div>

        <div ref={destinationRef} className="relative">
          <label className="block text-sm font-medium text-[#25d1ab] mb-2">
            <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Destino
          </label>
          <div className="relative">
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              onFocus={() => destination.length >= 3 && setShowDestinationSuggestions(true)}
              placeholder="Ej: Orlando, FL o 456 Oak Ave, Orlando, FL"
              className="w-full px-4 py-3 bg-navy bg-opacity-50 border border-turquoise border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-turquoise focus:bg-opacity-70"
            />
            {loadingSuggestions && destination.length >= 3 && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="animate-spin h-5 w-5 text-turquoise" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              </div>
            )}
          </div>

          {/* Dropdown de sugerencias de destino */}
          {showDestinationSuggestions && (
            <div className="absolute z-50 w-full mt-1 bg-navy border border-turquoise border-opacity-30 rounded-lg shadow-2xl max-h-60 overflow-y-auto">
              {destinationSuggestions.length > 0 ? (
                destinationSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => selectDestinationSuggestion(suggestion)}
                    className="w-full text-left px-4 py-3 hover:bg-turquoise hover:bg-opacity-20 text-white text-sm border-b border-white border-opacity-10 last:border-0 transition-colors"
                  >
                    <div className="flex items-start">
                      <svg className="w-4 h-4 mr-2 mt-0.5 shrink-0 text-turquoise" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="line-clamp-2">{suggestion.display_name}</span>
                    </div>
                  </button>
                ))
              ) : (
                !loadingSuggestions && (
                  <div className="px-4 py-3 text-white text-sm text-center opacity-70">
                    No se encontraron direcciones. Intenta con otra búsqueda.
                  </div>
                )
              )}
            </div>
          )}

          {destination.length > 0 && destination.length < 3 && (
            <p className="text-xs text-white/50 mt-1">Escribe al menos 3 caracteres para buscar</p>
          )}
        </div>
      </div>

      {/* Botón de calcular o pedir */}
      <button
        onClick={price !== null ? openModal : calculatePrice}
        disabled={loading}
        className="w-full py-4 bg-turquoise text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        {loading ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Calculando...</span>
          </>
        ) : (
          <span>{price !== null ? 'Pedir servicio' : 'Calcular precio'}</span>
        )}
      </button>

      {/* Mensaje de error */}
      {error && (
        <div className="mt-4 p-4 bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 rounded-lg">
          <p className="text-red-200 text-sm">{error}</p>
        </div>
      )}

      {/* Resultado */}
      {price !== null && (
        <div className="mt-6 p-6 bg-turquoise bg-opacity-20 border border-turquoise border-opacity-50 rounded-lg">
          <div className="text-center">
            <p className="text-white text-sm mb-2">Precio estimado</p>
            <p className="text-4xl font-bold text-white">${price.toFixed(2)}</p>
            <p className="text-white text-xs mt-1">USD</p>
            {distance !== null && serviceType === 'passenger' && (
              <p className="text-gray-200 text-sm mt-3">
                Distancia: {distance.toFixed(2)} millas
              </p>
            )}
            {serviceType !== 'passenger' && (
              <p className="text-gray-200 text-sm mt-3">
                Tarifa fija de delivery
              </p>
            )}
          </div>
        </div>
      )}

      {/* Modal de pedido */}
      {showModal && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-turquoise/20 backdrop-blur-md p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowModal(false);
            }
          }}
        >
          <div className="bg-navy rounded-2xl p-6 md:p-8 max-w-md w-full border border-turquoise border-opacity-30 shadow-2xl">
            {modalStep === 'name' ? (
              <>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-turquoise bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    ¡Estás a un paso de pedir tu auto!
                  </h3>
                  <p className="text-white text-opacity-80">
                    Dime tu nombre para continuar
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-turquoise mb-2">
                      Tu nombre completo
                    </label>
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleNextStep()}
                      placeholder="Ej: Juan Pérez González"
                      className="w-full px-4 py-3 bg-navy bg-opacity-50 border border-turquoise border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-turquoise"
                      autoFocus
                    />
                    <p className="text-xs text-white text-opacity-60 mt-2">
                      * Debes ingresar al menos nombre y apellido
                    </p>
                  </div>

                  {error && modalStep === 'name' && (
                    <div className="p-3 bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 rounded-lg">
                      <p className="text-red-200 text-sm">{error}</p>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <button
                      onClick={() => setShowModal(false)}
                      className="flex-1 py-3 bg-white bg-opacity-10 text-white rounded-lg font-semibold hover:bg-opacity-20 transition-all"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={handleNextStep}
                      className="flex-1 py-3 bg-turquoise text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                    >
                      Siguiente
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-turquoise bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Confirma tu pedido
                  </h3>
                  <p className="text-white text-opacity-80">
                    Revisa los detalles antes de continuar
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-white bg-opacity-30 rounded-lg p-4 border border-turquoise border-opacity-20">
                    <p className="text-turquoise text-sm font-medium mb-1">Nombre</p>
                    <p className="text-turquoise text-lg font-semibold">{userName}</p>
                  </div>

                  <div className="bg-white bg-opacity-30 rounded-lg p-4 border border-turquoise border-opacity-20">
                    <p className="text-turquoise text-sm font-medium mb-1">
                      <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="3" />
                      </svg>
                      Origen
                    </p>
                    <p className="text-turquoise text-sm">{origin}</p>
                  </div>

                  <div className="bg-white bg-opacity-30 rounded-lg p-4 border border-turquoise border-opacity-20">
                    <p className="text-turquoise text-sm font-medium mb-1">
                      <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      Destino
                    </p>
                    <p className="text-turquoise text-sm">{destination}</p>
                  </div>

                  <div className="bg-turquoise bg-opacity-20 rounded-lg p-4 border border-turquoise border-opacity-50">
                    <p className="text-white text-sm font-medium mb-1">Precio calculado</p>
                    <p className="text-white text-2xl font-bold">${price?.toFixed(2)} USD</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setModalStep('name')}
                    className="flex-1 py-3 bg-white bg-opacity-30 text-turquoise border border-turquoise border-opacity-50 rounded-lg font-semibold hover:bg-opacity-50 transition-all"
                  >
                    Atrás
                  </button>
                  <button
                    onClick={handleSendToWhatsApp}
                    className="flex-1 py-3 bg-turquoise text-navy rounded-lg font-semibold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Pedir ahora
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
