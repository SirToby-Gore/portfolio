function setCssVariablesForImageSpinner(): void {
	const banners = document.getElementsByClassName('image-carousel') as HTMLCollectionOf<HTMLDivElement>;

	for (let index = 0; index < banners.length; index++) {
		const banner = banners[index] as HTMLDivElement;
		
		const sliders = banner.getElementsByClassName('slider') as HTMLCollectionOf<HTMLDivElement>;

		for (let i = 0; i < sliders.length; i++) {
			const slider = sliders[i] as HTMLDivElement;
			const sliderItemChildren = slider.getElementsByClassName('item') as HTMLCollectionOf<HTMLDivElement>;
			
			slider.style.setProperty('--quantity', sliderItemChildren.length.toString());
			
			for (let j = 0; j < sliderItemChildren.length; j++) {
				const item = sliderItemChildren[j] as HTMLDivElement;

				item.style.setProperty('--index', j.toString());
			}
		}
	}
}

function setCssVariablesForImageSlider(): void {
	const sliders = document.getElementsByClassName('image-slider') as HTMLCollectionOf<HTMLDivElement>;

	for (let index = 0; index < sliders.length; index++) {
		const slider = sliders[index] as HTMLDivElement;

		slider.style.setProperty('--quantity', slider.getElementsByClassName('item').length.toString());

		const sliderItemChildren = slider.getElementsByClassName('item') as HTMLCollectionOf<HTMLDivElement>;
		
		for (let i = 0; i < sliderItemChildren.length; i++) {
			const item = sliderItemChildren[i] as HTMLDivElement;

			item.style.setProperty('--index', i.toString());
		}
	}
}

function setCssVariables(): void {
	setCssVariablesForImageSpinner();
	setCssVariablesForImageSlider();
}

function main(): void {
    setCssVariables();
}

main();