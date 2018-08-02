
export const name = name=> typeof name === 'string' && name.length > 1;
export const email = email=> /^.+@.+\..{2,20}$/.test(email);