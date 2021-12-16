export interface ApiItinerary {
  idlinha: number;
  nome: string;
  codigo: string;
  itinerario: {
    lat: string;
    lng: string;
  };
}
