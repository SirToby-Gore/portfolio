function setCssVariablesForImageSpinner(): void {
	const banners: HTMLCollectionOf<Element> = document.getElementsByClassName('banner');

	for (let index = 0; index < banners.length; index++) {
		const banner = banners[index];
		
		const sliders: HTMLCollectionOf<Element> = banner.getElementsByClassName('slider');

		for (let i = 0; i < sliders.length; i++) {
			const slider = sliders[i] as HTMLDivElement;
			const sliderItemChildren = slider.getElementsByClassName('item');
			
			slider.style.setProperty('--quantity', sliderItemChildren.length.toString());
			
			for (let j = 0; j < sliderItemChildren.length; j++) {
				const item = sliderItemChildren[j] as HTMLDivElement;

				item.style.setProperty('--index', j.toString());
			}
		}
	}
}

function setCssVariablesForImageSlider(): void {
	const sliders: HTMLCollectionOf<Element> = document.getElementsByClassName('image-slider');

	for (let index = 0; index < sliders.length; index++) {
		const slider = sliders[index] as HTMLDivElement;

		slider.style.setProperty('--quantity', slider.getElementsByClassName('item').length.toString());

		const sliderItemChildren = slider.getElementsByClassName('item');
		
		for (let i = 0; i < sliderItemChildren.length; i++) {
			const item = sliderItemChildren[i] as HTMLDivElement;

			item.style.setProperty('--index', i.toString());
		}
	}
}

function setCssVariables() {
	setCssVariablesForImageSpinner();
	setCssVariablesForImageSlider();
}

function main(): void {
    setCssVariables();
}

main();