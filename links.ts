interface ILink {
    name: string,
    image: string
    url: string
}

interface ICategory {
    title: string
    links: ILink[]
}

export const categoriesLinks = <ICategory[]>[
    {
      title: 'Линейная алгебра',
      links: [
        { name: 'Матрицы и определители', image: '/images/lessons/linear/1.png', url: '/lessons/linear/1-lesson' },
        { name: 'Системы линейных уравнений', image: '/images/lessons/linear/2.png', url: '/lessons/linear/2-lesson' },
        { name: 'Собственные значения и векторы', image: '/images/lessons/linear/3.jpg', url: '/lessons/linear/3-lesson' }
      ]
    },
    {
      title: 'Математический анализ',
      links: [
        { name: 'Пределы и непрерывность', image: '/images/lessons/analysis/1.png', url: '/lessons/analysis/1-lesson' },
        { name: 'Производные и дифференциалы', image: '/images/lessons/analysis/2.png', url: '/lessons/analysis/2-lesson' },
        { name: 'Интегралы', image: '/images/lessons/analysis/3.jpg', url: '/lessons/analysis/3-lesson' },
        { name: 'Ряды и пределы последовательностей', image: '/images/lessons/analysis/4.gif', url: '/lessons/analysis/4-lesson' }
      ]
    },
    {
      title: 'Дискретная математика',
      links: [
        { name: 'Логика и высказывания', image: '/images/lessons/discrete/1.png', url: '/lessons/discrete/1-lesson' },
        { name: 'Теория множеств', image: '/images/lessons/discrete/2.png', url: '/lessons/discrete/2-lesson' },
        { name: 'Графы', image: '/images/lessons/discrete/3.png', url: '/lessons/discrete/3-lesson' },
        { name: 'Комбинаторика и перестановки', image: '/images/lessons/discrete/4.png', url: '/lessons/discrete/4-lesson' }
      ]
    },
    {
      title: 'Теория вероятностей и статистика',
      links: [
        { name: 'Основы теории вероятностей', image: '/images/lessons/probability/1.png', url: '/lessons/probability/1-lesson' },
        { name: 'Случайные величины и распределения', image: '/images/lessons/probability/2.png', url: '/lessons/probability/2-lesson' },
        { name: 'Математическое ожидание и дисперсия', image: '/images/lessons/probability/3.jpg', url: '/lessons/probability/3-lesson' },
        { name: 'Основы математической статистики', image: '/images/lessons/probability/4.png', url: '/lessons/probability/4-lesson' }
      ]
    },
    {
      title: 'Дифференциальные уравнения',
      links: [
        { name: 'Обыкновенные дифференциальные уравнения', image: '/images/lessons/diffeq/1.png', url: '/lessons/diffeq/1-lesson' },
        { name: 'Системы дифференциальных уравнений', image: '/images/lessons/diffeq/2.png', url: '/lessons/diffeq/2-lesson' },
        { name: 'Частные производные', image: '/images/lessons/diffeq/3.png', url: '/lessons/diffeq/3-lesson' }
      ]
    }
  ]
  