class TitleState {
	private suffix: string = 'Zaira UI';
	private title: string = $state(this.suffix);

	get() {
		return this.title;
	}

	set(title: string) {
		this.title = title + ' - ' + this.suffix;
	}

	reset() {
		this.title = this.suffix;
	}
}

export const titleState = new TitleState();
