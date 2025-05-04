export class TitleState {
	private appName: string;
	private separator: string;
	private value: string = $state('');

	constructor(appName: string, separator?: string) {
		this.appName = appName;
		this.separator = separator || '-';
		this.value = this.appName;
	}

	get() {
		return this.value;
	}

	set(title: string) {
		this.value = `${title} ${this.separator} ${this.appName}`;
	}

	reset() {
		this.value = this.appName;
	}
}

export const title = new TitleState('Zaira UI');
