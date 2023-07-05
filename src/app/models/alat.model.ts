export class Alat {
    
    constructor(
       
        public nama_alat: string,
        public pic: string,
        public pemilik: string,
        public ruangan: string,
        public merk_type: string,
        public serial_number: string,
        //top of parameter always used 
        public picture_name: string,
        public status_kalibrasi: string,
        public status_monitoring: string,
        public nomer_seri : string,
        public nomer_inventaris: string,
        public kondisi_alat: string,
        public created_by: string,
        public kalibrasi_awal: string,
        public kalibrasi_ulang: string,
        public monitoring_awal: string,
        public monitoring_ulang: string,
       
     ) {}

}