// api/coffees.js
export default function handler(req, res) {
  const coffees = [ 
    {
      "id": 1,
      "imgSrc": "https://i.postimg.cc/MZD0Zr8Q/coffee-1.png",
      "name": "Expresso Tradicional",
      "tags": [
        "TRADICIONAL"
      ],
      "description": "O tradicional café feito com água quente e grãos moídos",
      "price": 4.00,
      "quantity": 0,
      "isOnCart": false
    },
    {
      "id": 2,
      "imgSrc": "https://i.postimg.cc/13gDHmVG/coffee-2.png",
      "name": "Expresso Americano",
      "tags": [
        "TRADICIONAL"
      ],
      "description": "Expresso diluído, menos intenso que o tradicional",
      "price": 7.90,
      "quantity": 0,
      "isOnCart": false
    },
    {
      "id": 3,
      "imgSrc": "https://i.postimg.cc/fTRcVjwg/coffee-3.png",
      "name": "Expresso Cremoso",
      "tags": [
        "TRADICIONAL"
      ],
      "description": "Café expresso tradicional com espuma cremosa",
      "price": 9.90,
      "quantity": 0,
      "isOnCart": false
    },
    {
      "id": 4,
      "imgSrc": "https://i.postimg.cc/tJSV3wXv/coffee-4.png",
      "name": "Expresso Gelado",
      "tags": [
        "TRADICIONAL",
        "GELADO"
      ],
      "description": "Bebida preparada com café expresso e cubos de gelo",
      "price": 8.90,
      "quantity": 0,
      "isOnCart": false
    },
    {
      "id": 5,
      "imgSrc": "https://i.postimg.cc/kXYxK6GM/coffee-5.png",
      "name": "Café com Leite",
      "tags": [
        "TRADICIONAL",
        "COM LEITE"
      ],
      "description": "Meio a meio de expresso tradicional com leite vaporizado",
      "price": 11.00,
      "quantity": 0,
      "isOnCart": false
    },
    {
      "id": 6,
      "imgSrc": "https://i.postimg.cc/MTYBTXgS/coffee-6.png",
      "name": "Latte",
      "tags": [
        "TRADICIONAL",
        "COM LEITE"
      ],
      "description": "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      "price": 9.90,
      "quantity": 0,
      "isOnCart": false
    },
    {
      "id": 7,
      "imgSrc": "https://i.postimg.cc/1X5qNsZN/coffee-7.png",
      "name": "Capuccino",
      "tags": [
        "TRADICIONAL",
        "COM LEITE"
      ],
      "description": "Bebida com canela feita de doses iguais de café, leite e espuma",
      "price": 9.90,
      "quantity": 0,
      "isOnCart": false
    },
    {
      "id": 8,
      "imgSrc": "https://i.postimg.cc/0NDmTVfr/coffee-8.png",
      "name": "Macchiato",
      "tags": [
        "TRADICIONAL",
        "COM LEITE"
      ],
      "description": "Café expresso misturado com um pouco de leite quente e espuma",
      "price": 10.00,
      "quantity": 0,
      "isOnCart": false
    },
    {
      "id": 9,
      "imgSrc": "https://i.postimg.cc/FH23CM02/coffee-9.png",
      "name": "Mocaccino",
      "tags": [
        "TRADICIONAL",
        "COM LEITE"
      ],
      "description": "Café expresso com calda de chocolate, pouco leite e espuma",
      "price": 13.90,
      "quantity": 0,
      "isOnCart": false
    },
    {
      "id": 10,
      "imgSrc": "https://i.postimg.cc/xCQHnLx5/coffee-10.png",
      "name": "Chocolate Quente",
      "tags": [
        "ESPECIAL",
        "COM LEITE"
      ],
      "description": "Bebida feita com chocolate dissolvido no leite quente e café",
      "price": 14.00,
      "quantity": 0,
      "isOnCart": false
    },
    {
      "id": 11,
      "imgSrc": "https://i.postimg.cc/2j2vNb4d/coffee-11.png",
      "name": "Cubano",
      "tags": [
        "ESPECIAL",
        "ALCOÓLICO",
        "GELADO"
      ],
      "description": "Drink gelado de café expresso com rum, creme de leite e hortelã",
      "price": 5.00,
      "quantity": 0,
      "isOnCart": false
    },
    {
      "id": 12,
      "imgSrc": "https://i.postimg.cc/GhtDLLQW/coffee-12.png",
      "name": "Havaiano",
      "tags": [
        "ESPECIAL"
      ],
      "description": "Bebida adocicada preparada com café e leite de coco",
      "price": 15.00,
      "quantity": 0,
      "isOnCart": false
    },
    {
      "id": 13,
      "imgSrc": "https://i.postimg.cc/7YR2bFtf/coffee-13.png",
      "name": "Árabe",
      "tags": [
        "ESPECIAL"
      ],
      "description": "Bebida preparada com grãos de café árabe e especiarias",
      "price": 18.50,
      "quantity": 0,
      "isOnCart": false
    },
    {
      "id": 14,
      "imgSrc": "https://i.postimg.cc/jSJJfMBv/coffee-14.png",
      "name": "Irlandês",
      "tags": [
        "ESPECIAL",
        "ALCOÓLICO"
      ],
      "description": "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      "price": 20.00,
      "quantity": 0,
      "isOnCart": false
    }
  ];

  res.status(200).json({ coffees });
}
