export const formStringify = (data: any): string => {
	return new URLSearchParams(data).toString();
};
