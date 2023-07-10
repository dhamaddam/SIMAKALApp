export class Alat {
    
    constructor(
        public pic: string,
        public name: string,
        public serial_no: string,
        public inventory_no: string,
        public room: string,
        public type: string,
        //top of parameter always used 
        public calibration_status: string,
        public monitoring_status: string,
        public owner_id: string,
        public initial_calibration : string,
        public re_calibration: string,
        public initial_monitoring: string,
        public re_monitoring: string,
     ) { }

}