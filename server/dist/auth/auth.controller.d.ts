import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: AuthDto): Promise<null>;
    login(dto: AuthDto): Promise<null>;
    logout(): Promise<null>;
    refresh(): Promise<null>;
}
