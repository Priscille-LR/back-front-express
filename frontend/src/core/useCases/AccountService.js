

export class AccountService {

    constructor(accountRepository) {
        this.accountRepo = accountRepository;
    }

    async getAccounts() {
        return this.accountRepo.getAccounts();
    }
}
