# pokedexJS
Projeto para aperfeiçoamento de HTML, CSS e JavaScript. Para realização deste projeto utilizei a API encontrada no link "https://pokeapi.co/api/v2/pokemon".

Podemos observar que a própria API conforme link mencionado acima possui o número do Pokemon, bem como a descrição do Pokemon em escopo.
Como padrão, deixei travado o Pokemom com iD número 1 na API, conforme imagem abaixo:

![image](https://user-images.githubusercontent.com/86863914/181640885-13bc5e93-7bff-47a2-94fe-464d706fda28.png)


A busca do Pokemom por meio do input pode ser feita pelo iD do Pokemom e pela descrição, conforme imagens abaixo:

![image](https://user-images.githubusercontent.com/86863914/181641710-0ff751dc-6696-48ad-825b-02dddc632043.png)

![image](https://user-images.githubusercontent.com/86863914/181643333-419f7b05-6860-4125-98ea-4503a26e5a89.png)



O evento de procura do iD/Descrição do Pokemon na API por meio do input precisou ser tratado para lowerCase, deste modo independentemente de como for a escrita o resultado será encontrado:

![image](https://user-images.githubusercontent.com/86863914/181642238-9318130f-c414-4b64-aafd-5e756226896b.png)

Para os pokemons não existentes e não identificados na API, o resultado será o seguinte retorno:

![image](https://user-images.githubusercontent.com/86863914/181642440-7eb3680a-8c0e-4c43-b21a-fcaf3c8af1bc.png)


A navegação também pode ser feita por meio dos botões "Previously" e "Next", conforme mencionado acima, como foi definido o Pokemon com iD nº 1, quando o usuário apertar o botão de Next/Prev, a função irá Adicionar/Retirar o proximo iD do próximo Pokemon.
Assim como podendo ser sequêncial da numeração de onde o usuário pesquisou, por exemplo: Se ele pesquisou o Pokemon nº 25 e apertar o botão de Next, irá para o nº 26. O inverso também é verdadeiro.
