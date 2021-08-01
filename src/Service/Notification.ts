import {Notyf} from 'notyf'

export enum SccMsg{
    ADDED_CAT = 'Added cat successfully',
    DOWNLOADED_CATS = 'All cats are here!',
    DELETED_CAT = 'deleted cat successfully',
    REGISTER_SUCCESS = 'you have been registered successfully',
    LOGIN_SUCCESS = 'you have been logged in successfully',
    LOGOUT_SUCCESS = 'you have been logged out successfully',
    

}
export enum ErrMsg{
    PLS_LOGIN = 'Please login in order to communicate with our server',
}
class Notify{

    private notification = new Notyf({duration:4000, position:{x:"left",y:"top"}});
    public success(message: string){
        this.notification.success(message);
    }

    public error(err: any){
        const msg = this.extractMsg(err);
        this.notification.error(msg);
    }

    private extractMsg(err: any): string{
        
				if(typeof err === 'string'){
            return err;
        }

        if(typeof err?.response?.data === 'string'){ //Backend exact error
            return err.response.data;
        }

        if(Array.isArray(err?.response?.data)){ // Backend exact error list
            return err?.response?.data[0];
        }

        
				// Must be last
        if(typeof err?.message === 'string'){
            return err.message;
        }


        return "Miaouuuu, an error occurred, please try again.";


    }
}
const notify = new Notify();
export default notify;