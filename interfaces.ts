interface Book {
    name: string;
    releaseYear: number;
    author: Author[];
}

interface Author {
    firstName: string;
    lastName: string;
}

const book: Book = {
    name: 'Harry Potter',
    releaseYear: 1995,
    author: [
        {
            firstName: 'JK',
            lastName: 'Rowling',
        },
        {
            firstName: '',
            lastName: ''
        }
    ],
}






interface Movie {
    name: string;
    releaseYear: number;
    country: string;
    actors: Actor[];
    genres: genre[];
}

type genre = 'accion' | 'aventura' | 'terror' | 'romance';

interface Actor {
    firstName: string;
    lastName: string;
    country: string;
}

const movie1: Movie[] = [
    {
        name: "Titanic",
        releaseYear: 1998,
        country: "Estados Unidos",
        actors: [
            {
                firstName: 'Leonardo',
                lastName: 'DiCaprio',
                country: 'Estados Unidos'
            },
            {
                firstName: 'Kate',
                lastName: 'Winslet',
                country: 'Inglaterra',
            }
        ],
        genres: ["romance", "aventura"],
    },
    {
        name: "Titanic",
        releaseYear: 1998,
        country: "Estados Unidos",
        actors: [
            {
                firstName: 'Leonardo',
                lastName: 'DiCaprio',
                country: 'Estados Unidos'
            },
            {
                firstName: 'Kate',
                lastName: 'Winslet',
                country: 'Inglaterra',
            }
        ],
        genres: ["romance", "aventura"],
    },
]



const movieFactory = (name: string, year: number, country: string): Movie => {
    return {
        name,
        releaseYear: year, 
        country,
        actors: [],
        genres: [],
    }
}

const movie2 = movieFactory('Star wars', 1976, 'Estados unidos');
















