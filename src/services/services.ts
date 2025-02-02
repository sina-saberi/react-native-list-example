import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";


export default class ApplicationServices {
    public instance: AxiosInstance;

    constructor(config: CreateAxiosDefaults) {
        this.instance = axios.create(config);
    }


    
}