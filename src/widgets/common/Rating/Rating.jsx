import { useState } from 'react'
import './Rating.css'
import rating1 from '../../../shared/assets/images/rating1.svg'
import rating2 from '../../../shared/assets/images/rating2.svg'
import rating3 from '../../../shared/assets/images/rating3.svg'
import rating4 from '../../../shared/assets/images/rating4.svg'
import rating5 from '../../../shared/assets/images/rating5.svg'
import rating6 from '../../../shared/assets/images/rating6.svg'
import rating7 from '../../../shared/assets/images/rating7.svg'
import rating8 from '../../../shared/assets/images/rating8.svg'

function Rating() {
	const [countStar] = useState(0)
	const data = [
		{ title: 'Продокторов', rating: 1, img: rating1 },
		{ title: 'Yell.ru', rating: 8.9, img: rating2 },
		{ title: 'ЛайкДоктор', rating: 6.8, img: rating3 },
		{ title: 'Google', rating: 4.7, img: rating4 },
		{ title: 'Стоматология.су', rating: 4.9, img: rating5 },
		{ title: 'Zoon', rating: 5.0, img: rating6 },
		{ title: 'Yandex', rating: 3.3, img: rating7 },
		{ title: 'Flamp.ru', rating: 4.1, img: rating8 }
	]
	const countRating = {
		half: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Star_rating_0.5_of_5.png/800px-Star_rating_0.5_of_5.png?20160511142437',
		one: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Star_rating_1_of_5.png/800px-Star_rating_1_of_5.png?20160511143417',
		oneHalf:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Star_rating_1.5_of_5.png/800px-Star_rating_1.5_of_5.png?20160511143606',
		two: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Star_rating_2_of_5.png/800px-Star_rating_2_of_5.png?20160511143701',
		twoHalf:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Star_rating_2.5_of_5.png/800px-Star_rating_2.5_of_5.png?20160511144211',
		three:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Star_rating_3_of_5.png/800px-Star_rating_3_of_5.png?20160511144329',
		threeHalf:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Star_rating_3.5_of_5.png/800px-Star_rating_3.5_of_5.png?20160511144412',
		four: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Star_rating_4_of_5.png/800px-Star_rating_4_of_5.png?20160511144516',
		fourHalf:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Star_rating_4.5_of_5.png/799px-Star_rating_4.5_of_5.png?20160511144611',
		five: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Star_rating_5_of_5.png/799px-Star_rating_5_of_5.png?20160511144701'
	}

	const [imagesState, setImagesState] = useState()

	function clickTo(rating) {
		// setCountStar(rating)
		console.log(rating)
		if (rating > 0 && rating < 2) {
			console.log('num 1')
			setImagesState(countRating.half)
		} else if (rating === 2) {
			console.log('num 2')
			setImagesState(countRating.one)
		} else if (rating > 2 && rating < 4) {
			console.log('num 3')
			setImagesState(countRating.oneHalf)
		} else if (rating === 4) {
			console.log('num 4')
			setImagesState(countRating.two)
		} else if (rating > 4 && rating < 6) {
			console.log('num 5')
			setImagesState(countRating.twoHalf)
		} else if (rating === 6) {
			console.log('num 6')
			setImagesState(countRating.three)
		} else if (rating > 6 && rating < 8) {
			console.log('num 7')
			setImagesState(countRating.threeHalf)
		} else if (rating === 8) {
			console.log('num 8')
			setImagesState(countRating.four)
		} else if (rating > 8 && rating < 10) {
			console.log('num 9')
			setImagesState(countRating.fourHalf)
		} else if (rating === 10) {
			console.log('num 10')
			setImagesState(countRating.five)
		}
	}

	return (
		<section className='rating'>
			<div className='container'>
				<div className='rating__content'>
					<div className='rating__block__left'>
						<h2>Независимые рейтинги</h2>
						<div className='rating__block__left-blocks'>
							<div className='rating__contnent__s'>
								{data.map((el, ind) => (
									<div
										onClick={() => clickTo(el.rating)}
										key={ind}
										className='rating__block'
									>
										<div className='rating__block-img'>
											<div className='rating__block-img-child'>
												<img src={el.img} alt='' />
											</div>
										</div>
										<div className='rating__block-info'>
											<h4>{el.title}</h4>
											<p>{el.rating}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className='rating__block__right'>
						<div className='rating__block-img-right'>
							<div>
								<img src={imagesState} alt='' />
							</div>
							<div>
								<h3>{countStar}</h3>
								<p className='text-center'>
									Средняя <br /> оценка
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Rating
