import {Controller, Route, Get, Post, Delete, Patch, Example} from 'lucid-web-api';
import {User, UserCreateRequest, UserUpdateRequest} from '../models/user';

@Route('Users')
export class UsersController extends Controller {

    /** Get the current user */
    @Get('Current')
    @Example<User>({
        email: 'test@test.com',
        id: 1,
    })
    public async Current(): Promise<User> {
        return {
            email: 'test',
            id: 666
        };
    }

    /** Get user by ID */
    @Get('{userId}')
    public async Get(userId: number): Promise<User> {
        return {
            email: 'test2',
            id: userId
        };
    }

    /** 
     * Create a user 
     * @param request This is a user creation request description 
     */
    @Post()
    public async Create(request: UserCreateRequest, optionalString?: string): Promise<User> {
        return {
            email: request.email,
            id: 666
        };
    }

    /** Delete a user by ID */
    @Delete('{userId}')
    public async Delete(userId: number): Promise<void> {
        return Promise.resolve();
    }

    /** Update a user */
    @Patch()
    public async Update(request: UserUpdateRequest): Promise<User> {
        return {
            email: request.email,
            id: 1337
        };
    }
}