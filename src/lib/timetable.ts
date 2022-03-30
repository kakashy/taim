import { valLearningArea } from '$lib/valids';
import _ from 'lodash';
type Gen = {
    Slot: string;
    Grade: {
        Grade: string;
        Stream: string;
        Area: string;
    }[][];
}[]
export function gen(validGrade: string[], validStream: string[]): Gen {
	let touchedArea: string[];
	const slot = ['7 AM', '8 AM'];
	const dump = slot.map((slot) => {
		const vg = validGrade.map((g) => {
			touchedArea = [];
			const grade = g;
			const vs = validStream.map((s) => {
				/**
				 * This function fetches for a unique random learning area from the list of valid ones
				 * @param {string} grade required to get a valid list of learning areas
				 * @returns {string} a unique learning area string
				 */
				function getCandidate(grade: string): string {
					const candidateArea = _.sample(valLearningArea(grade));
					/* checking whether the learning area has already been selected and if truthy,
                            we look for another candidate learning area
                        */
					const area: string = _.includes(touchedArea, candidateArea) ? getCandidate(grade) : candidateArea;
					// adding this fresh learning area to the list of the ones already found
					touchedArea = [...touchedArea, area];
					return area;
				}
				return {
					Grade: grade,
					Stream: s,
					Area: getCandidate(grade)
				};
			});
			return vs;
		});
		return {
			Slot: slot,
			Grade: vg
		};
	});
	return dump;
}
