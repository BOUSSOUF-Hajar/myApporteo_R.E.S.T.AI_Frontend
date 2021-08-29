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
    getAffaire(id){
        return http.get(`/affaire/${id}`);
    }
    adminAjouterContrat(id,file){
        const user = JSON.parse(localStorage.getItem('user'));
        return http.put(`/adminAddContrat/${id}`,file,
        {headers: 
            {"Content-Type": "multipart/form-data",
            Authorization: 'Bearer ' + user.accessToken
            }
        }
        );
    }
    appAjouterContrat(id,file){
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(file)
        return http.put(`/appAddContrat/${id}`,file,
        {headers: 
            {"Content-Type": "multipart/form-data",
            Authorization: 'Bearer ' + user.accessToken
            }
        }
        );
    }
    getAdminContratId(id){
        return http.get(`/admin/contrat/${id}`);
    }
    getAppContratId(id){
        return http.get(`/app/contrat/${id}`);
    }
    getContrat(id) {
        return http.get(`/contrat/${id}`);
      }
    affecterPartenaire(affaire){
      
        return http.put(`/addPartenaire`,affaire);
    }
    affaireVendu(id){
       
        return http.put(`/confirmerVente/${id}`)
        
    }
    annulerAjoutApp(id){
       
        return http.put(`/annulerAjoutApp/${id}`)
        
    }
    annulerAjoutAdmin(id){
       
        return http.put(`/annulerAjoutAdmin/${id}`)
        
    }
    annulerVente(id){
       
        return http.put(`/annulerVente/${id}`)
        
    }
}
export default new AffaireService();