export const init = (jsonData: any[]) => {
    const options = jsonData.flatMap(Object.keys);
    const msg = `Welcome!!!, choose from below: <br/> ${options}`;
    return msg;
};

export const chatbot = (jsonData: any[], option: string | number, type?: any) => {
    let op: any;
    const response = jsonData.find((ele) => ele[option]);
    if (response) {
        if (option && type) {
            op = Object.values(response);
            op = op.flat().find((item: any) => item.type === type);
            op = op.data;
        } else if (option && !type) {
            op = Object.values(response);
            op = op.flat().map((item: any) => item.type);
        }
    }
    return op;
};
