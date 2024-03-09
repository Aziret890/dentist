import React, { useState } from 'react'
import teethshub from '../../../shared/assets/images/teethshub.png'
import { motion } from 'framer-motion'

const variants = {
	hidden: {
		opacity: 0,
		scaleY: 0
	},
	visible: { opacity: 1, scaleY: 1 }
}

const Toothbrush = () => {
	const [tabIndex, setTabIndex] = useState(0)
	return (
		<div className='container'>
			<h3 className='text-3xl font-bold text-[#253F41] text-center mt-20'>
				Уход за имплантами
			</h3>
			<h4 className='text-[#253F41] font-medium text-center my-7'>
				Импланты надо чистить также, как и здоровые зубы, не менее двух раз в
				день
			</h4>
			<div
				data-aos='fade-up'
				className='flex items-center justify-between my-11'
			>
				<button
					onClick={() => setTabIndex(0)}
					className={` ${
						tabIndex === 0
							? 'bg-[#2CB2BB] text-white'
							: 'bg-[#F2FAFB] text-[#2cb2bb]'
					} w-[284px] h-[80px] rounded-lg flex items-center px-5 font-bold text-sm duration-150`}
				>
					<h5>Зубная щётка</h5>
				</button>
				<button
					onClick={() => setTabIndex(1)}
					className={` ${
						tabIndex === 1
							? 'bg-[#2CB2BB] text-white'
							: 'bg-[#F2FAFB] text-[#2cb2bb]'
					} w-[284px] h-[80px] rounded-lg flex items-center px-5 font-bold text-sm duration-150`}
				>
					<h5>Ирригатор или поласкание</h5>
				</button>
				<button
					onClick={() => setTabIndex(2)}
					className={` ${
						tabIndex === 2
							? 'bg-[#2CB2BB] text-white'
							: 'bg-[#F2FAFB] text-[#2cb2bb]'
					} w-[284px] h-[80px] rounded-lg flex items-center px-5 font-bold text-sm duration-150`}
				>
					<h5>Зубная нить</h5>
				</button>
				<button
					onClick={() => setTabIndex(3)}
					className={` ${
						tabIndex === 3
							? 'bg-[#2CB2BB] text-white'
							: 'bg-[#F2FAFB] text-[#2cb2bb]'
					} w-[284px] h-[80px] rounded-lg flex items-center px-5 font-bold text-sm duration-150`}
				>
					<h5>Профессиональная чистка</h5>
				</button>
			</div>
			<motion.div
				variants={variants}
				initial='hidden'
				animate='visible'
				transition={{
					delay: 1 * 0.2,
					ease: 'easeInOut',
					duration: 0.25
				}}
				viewport={{ amount: 0 }}
				className='flex items-start justify-between mt-11'
			>
				<div className=''>
					{tabIndex === 0 ? (
						<img width={480} src={teethshub} alt='img' />
					) : tabIndex === 1 ? (
						<img
							width={480}
							src='https://chudostom.ru/wp-content/uploads/2019/07/uhod-za-implantami.jpg'
							alt=''
						/>
					) : tabIndex === 2 ? (
						<img
							width={480}
							src='https://avatars.dzeninfra.ru/get-zen_doc/1328466/pub_5bfb7ef9074c3900aa0eb26f_5bfb7f18074c3900aa0eb271/scale_1200'
							alt=''
						/>
					) : null}
				</div>
				<div className='w-[692px]'>
					{tabIndex === 0 ? (
						<p>
							Очищать необходимо выступающую часть импланта, нижнюю часть
							импланта и десны. <br /> Проводить очищение импланта можно:
							традиционной зубной щеткой или электрической, имеющей мягкую
							щетину. Для очищения межзубных промежутков применяют специальные
							щетки, которые легко проникают в труднодоступные места. К таким
							щеткам относят щетки с пучковой насадкой.
						</p>
					) : tabIndex === 1 ? (
						<div>
							<p className='text-sm'>
								В первые дни после установки нужно особенно бережно ухаживать за
								вживленными стержнями, так как в ротовой полости имеются раны.{' '}
							</p>
							<span className='text-sm'>Необходимо:</span> <br />
							<ul className='ml-10 text-sm'>
								<li className=' list-disc'>
									Твердую пищу не употреблять совсем;
								</li>
								<li className=' list-disc'>Не жевать на стороне импланта;</li>
								<li className=' list-disc'>
									При выполнении гигиенических процедур пользоваться только
									мягкой щеткой и противовоспалительной пастой;
								</li>
								<li className=' list-disc'>
									При выполнении процедуры не касаться щеткой места травмы;
								</li>
								<li className=' list-disc'>
									Использовать асептические ополаскиватели.
								</li>
							</ul>{' '}
							<br />
							<p className='text-sm'>
								{' '}
								Когда имплант прижился, устанавливают формователь десны.
								Ухаживать за конструкцией нужно так же, как и после операции.
								Кроме того, потребуется очищать абатмент мягкой щёткой, не
								прилагая усилий, действуя максимально аккуратно. Временная
								коронка очищается аналогично. В период заживления тканей можно
								проводить только поверхностную чистку. На основание коронки
								надавливать нельзя. После установки постоянной коронки при
								выполнении гигиенических мероприятий необходимо проводить
								стандартные действия. И имплант с коронкой, и другие зубы
								нуждаются в тщательной очистке.
							</p>
						</div>
					) : tabIndex === 2 ? (
						<div>
							<p className='text-sm'>
								Существуют разные рекомендации, как использовать зубную нить.
								Одни специалисты считают, что эффективней ее применить до
								гигиенической чистки щеткой, по мнению других – флосс более
								эффективен после щетки с пастой. Общего научного обоснования или
								клинических исследований по этому вопросу нет. Важно лишь
								систематическое применение нитки для зубов. <br /> <br /> Прямое
								показание для применения флоссов:
							</p>
							<ul className='ml-10 text-sm'>
								<li className=' list-disc'>скученность зубов;</li>
								<li className=' list-disc'>установка апроксимальных пломб;</li>
								<li className=' list-disc'>болезни пародонта;</li>
								<li className=' list-disc'>
									наличие любых несъемных ортодонтических (брекеты),
									ортопедических (коронки, протезы) конструкций.
								</li>
							</ul>{' '}
							<div className='p-3 border-2 border-solid border-[#2cb2bb] rounded-md my-3'>
								Для сохранения здоровья зубов и десен гигиеническая чистка
								должна выполняться 2 раза, ежедневно, утром и вечером.
								Использование флосса – часть гигиены рта. Это средство доделает
								работу там, где не достать щеткой. Зубная нитка показана всем,
								без ограничений на возраст, особенности строения зубочелюстной
								системы. Нужен флосс молочным, постоянным, искусственным зубам
								(коронкам, протезам).
							</div>
						</div>
					) : null}
				</div>
			</motion.div>
		</div>
	)
}

export default Toothbrush
