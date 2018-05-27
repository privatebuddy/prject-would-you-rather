import men from './avatar_men_1.png';
import women from './avatar_women_1.png';
import user from './avatar_no_user.png';


export default function getImageName(path){
    switch(path)
    {
        case "./avatar_men_1.png":
            return men;
        case "./avatar_women_1.png":
            return women;
        default :
            return user;
    }
}