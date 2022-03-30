export function valLearningArea(grade: string): string[] {
	let la: string[];
	switch (grade) {
		case 'PP1':
		case 'PP2':
			la = [
				'Language Activities',
				'Mathematical Activities',
				'Environmental Activities',
				'Psychomotor and Creative Activities',
				'Religious Education Activities',
				'Pre Braille Activities'
			];
			break;
		case 'Grade 1':
		case 'Grade 2':
		case 'Grade 3':
			la = [
				'Literacy',
				'Kiswahili Language Activities',
				'English Language Activities',
				'Indigenous Language Activities',
				'Mathematical Activities',
				'Environmental Activities',
				'Hygiene and Nutrition Activities',
				'Religious Education Activities',
				'Movement and Creative Activities'
			];
			break;
		case 'Grade 4':
		case 'Grade 5':
		case 'Grade 6':
			la = [
				'English',
				'Kiswahili',
				'Home Science',
				'Agriculture',
				'Science and Technology',
				'Mathematics',
				'Religious Education',
				'Creative Arts',
				'Physical and Health Education',
				'Social Studies'
			];
			break;
		default:
			la = ['Please select a valid grade'];
			break;
	}

	return la;
}
