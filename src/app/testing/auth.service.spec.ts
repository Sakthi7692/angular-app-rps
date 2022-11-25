import { AuthService } from "./auth.service";

describe('Auth Service', () => {
    let service: AuthService;
    beforeEach(()=>{
        service = new AuthService();
    });

    afterEach(() => {
        localStorage.removeItem('token');
    });

    it('Should return true from isAuth', ()=>{
        localStorage.setItem('token', 'token')
        expect(service.isAuth()).toBeTruthy();
    });

    it('Should return false from isAuth', ()=>{
        expect(service.isAuth()).toBeFalsy();
    });
})