import authHeader from './authHeader';
import http from "./axios";
class AffaireService{
    ajouterAffaire(affaire){
        return http.post('/affaire',affaire,{headers: authHeader() });
    }
    mesAffaireAppo(){
        return http.get(`/apporteur_affaires`,{headers: authHeader() });
    }
    mesAffairePart(){
        return http.get(`/partenaire_affaires`,{headers: authHeader() });
    }
    allAffaires(){
        return http.get(`/affaires`,{headers: authHeader() });
    }
    ajouterContrat(id,file){
        const user = JSON.parse(localStorage.getItem('user'));
        return http.put(`/affaireAddContrat/${id}`,file,
        {headers: 
            {"Content-Type": "multipart/form-data",
            Authorization: 'Bearer ' + user.accessToken
            }
        }
        );
    }
    getContratId(id){
        return http.get(`/affaire/contrat/${id}`);
    }
    getContrat(id) {
        return http.get(`/contrat/${id}`);
      }
}
export default new AffaireService();