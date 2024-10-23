import { IUser } from '../../models/userModel/user-model';

export function validateUser(data: unknown): data is IUser {
    if (typeof data !== 'object' || data === null) {
        return false;
    }

    const user = data as Record<string, unknown>;

    // Check existence and type of all required fields
    const requiredStringFields: (keyof IUser)[] = [
        'id',
        'username',
        'email',
        'password',
        'role',
        'familyId'
    ];

    const allFieldsPresent = requiredStringFields.every(
        field => typeof user[field] === 'string' && user[field]?.toString().trim() !== ''
    );

    if (!allFieldsPresent) {
        return false;
    }

    // Additional validation for email format
    if (!isValidEmail(user.email as string)) {
        return false;
    }

    // Password strength validation
    if (!isValidPassword(user.password as string)) {
        return false;
    }

    return true;
}

function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password: string): boolean {
    // Minimum 8 characters, at least one uppercase letter, one lowercase letter,
    // one number and one special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}