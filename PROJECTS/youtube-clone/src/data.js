export const API_KEY = 'AIzaSyBjRCeKg7xPKVwn85Hq1HALHXiDn8qEL_w';

export const value_convertor = (value) =>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M"
    }else if(value>= 1000){
        return Math.floor(value/1000)+"K"
    }else{
        return value;
    }
}