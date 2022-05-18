exports.formatAccounts = (response) => {
    return response.data.resources.map((el) => {
        return {
            id: el.id,
            name: el.name,
            balance: el.balance
        };
    });
}


exports.formatResponse = (formattedAccounts) => {
    return {
        rounded_sum: Math.round(formattedAccounts.map((el) => el.balance).reduce((previousValue, currentValue) => previousValue + currentValue)),
        accounts: formattedAccounts
    };
}