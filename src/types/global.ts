export type PostItem = {
	url: string;
	title: string;
	date: Date;
	tags: Array<string>;
	part: number;
	series: string;
	draft: boolean | undefined;
};
