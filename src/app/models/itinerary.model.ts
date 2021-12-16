export interface ApiItinerary {
  idlinha: string;
  nome: string;
  codigo: string;
  itinerario: [
    {
      lat: string;
      lng: string;
    }
  ];
}
