import { NextResponse } from 'next/server';

// Función para geocodificar una dirección usando Nominatim (OpenStreetMap)
async function geocodeAddress(address: string): Promise<{ lat: number; lon: number } | null> {
  try {
    const url = new URL('https://nominatim.openstreetmap.org/search');
    url.searchParams.append('q', address);
    url.searchParams.append('format', 'json');
    url.searchParams.append('limit', '1');

    const response = await fetch(url.toString(), {
      headers: {
        'User-Agent': 'RideTaxi App'
      }
    });

    if (!response.ok) {
      console.error('Nominatim error:', response.status);
      return null;
    }

    const data = await response.json();

    if (!data || data.length === 0) {
      console.error('No geocoding results for:', address);
      return null;
    }

    return {
      lat: parseFloat(data[0].lat),
      lon: parseFloat(data[0].lon)
    };
  } catch (error) {
    console.error('Geocoding error:', error);
    return null;
  }
}

export async function POST(request: Request) {
  try {
    console.log('=== Calculate Distance API Called ===');
    
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      return NextResponse.json(
        { error: 'Invalid JSON in request body', details: parseError instanceof Error ? parseError.message : 'Unknown error' },
        { status: 400 }
      );
    }

    const { origin, destination } = body;
    console.log('Request body:', { origin, destination });

    if (!origin || !destination) {
      return NextResponse.json(
        { error: 'Se requiere origen y destino' },
        { status: 400 }
      );
    }

    console.log('Geocoding origin:', origin);
    const originCoords = await geocodeAddress(origin);

    if (!originCoords) {
      return NextResponse.json(
        { error: 'No se pudo encontrar la dirección de origen. Intenta ser más específico (ej: ciudad, estado).' },
        { status: 404 }
      );
    }

    console.log('Geocoding destination:', destination);
    const destCoords = await geocodeAddress(destination);

    if (!destCoords) {
      return NextResponse.json(
        { error: 'No se pudo encontrar la dirección de destino. Intenta ser más específico (ej: ciudad, estado).' },
        { status: 404 }
      );
    }

    console.log('Origin coords:', originCoords);
    console.log('Destination coords:', destCoords);

    // Usar OSRM (Open Source Routing Machine) para calcular la ruta
    const osrmUrl = `https://router.project-osrm.org/route/v1/driving/${originCoords.lon},${originCoords.lat};${destCoords.lon},${destCoords.lat}?overview=false`;

    console.log('Calling OSRM:', osrmUrl);

    const osrmResponse = await fetch(osrmUrl);

    if (!osrmResponse.ok) {
      console.error('OSRM error:', osrmResponse.status);
      return NextResponse.json(
        { error: 'Error al calcular la ruta' },
        { status: 500 }
      );
    }

    const osrmData = await osrmResponse.json();
    console.log('OSRM response:', JSON.stringify(osrmData, null, 2));

    if (osrmData.code !== 'Ok' || !osrmData.routes || osrmData.routes.length === 0) {
      console.error('No route found:', osrmData);
      return NextResponse.json(
        { error: 'No se encontró una ruta válida entre las direcciones' },
        { status: 404 }
      );
    }

    const route = osrmData.routes[0];
    const distanceInMeters = route.distance;
    const durationInSeconds = route.duration;

    // Convertir metros a millas
    const distanceInMiles = distanceInMeters * 0.000621371;
    const durationMinutes = Math.round(durationInSeconds / 60);

    return NextResponse.json({
      distance: distanceInMiles,
      distanceText: `${distanceInMiles.toFixed(2)} mi`,
      duration: `${durationMinutes} min`,
    });
  } catch (error) {
    console.error('=== Unexpected error calculating distance ===');
    console.error('Error:', error);
    console.error('Stack:', error instanceof Error ? error.stack : 'No stack trace');
    
    return NextResponse.json(
      {
        error: 'Error interno del servidor',
        details: error instanceof Error ? error.message : 'Unknown error',
        type: error instanceof Error ? error.constructor.name : typeof error
      },
      { status: 500 }
    );
  }
}
