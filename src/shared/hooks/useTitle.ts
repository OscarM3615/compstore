import config from 'shared/config';

const useTitle = (title?: string) => {
	if (title) document.title = `${title} | ${config.appName}`;
	else document.title = config.appName;
};

export default useTitle;
