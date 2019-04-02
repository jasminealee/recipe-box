import { Component } from '@angular/core';
import { Recipe } from './models/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Box';
  newRecipe: Recipe;
  recipes: Recipe[] = [
// tslint:disable-next-line: max-line-length
    new Recipe('Peanut Butter Brownies', ['2oz unsweetened baking chocolate', '2oz semi-sweet baking chocolate', '3/4 cup butter', '1 3/4 cups sugar', '3 eggs', '1 tbsp vanilla extract', '2 tbsp unsweetened cocoa powder', '1 cup all-purpose flour', '1/2 cup peanut butter', '2 tbsp butter', '1/3 cup powdered sugar', '1 tsp vanilla'], ['Preheat oven to 350℉.', 'Place the two baking chocolates and butter in a large, microwave safe bowl. Heat on HIGH power for 2-3 minutes, stirring every 30 seconds, until chocolate is smooth.', 'Stir in sugar. Add eggs, vanilla, and cocoa and stir well.', 'Add flour and stir carefully.', 'Spread batter in prepared pan. Stir together peanut butter, melted butter, powdered sugar, and vanilla.', 'Drop spoonfuls on top of the brownies then swirl with a butter knife or the back of a wooden spoon.', 'Bake about 28-30 minutes, until the center seems set. Let cool before cutting. These brownies, baked this way, will be super gooey inside. If you like your brownies more done and less gooey, bake them longer.']),
    // tslint:disable-next-line: max-line-length
    new Recipe('Banana Cream Pie', ['1 cup sugar', '1/4 cup cornstarch', '1/2 teaspoon salt', '3 cups 2% milk', '2 large eggs', 'lightly beaten', '3 tablespoons butter', '1-1/2 teaspoons vanilla extract', '1 pie crust (9 inches) baked', '2 large firm bananas', '1 cup heavy whipping cream', 'whipped'], ['In a large saucepan combine sugar, cornstarch, salt and milk until smooth.', 'Cook and stir over medium-high heat until thickened and bubbly.', 'Reduce heat; cook and stir 2 minutes longer.', 'Remove from heat. Stir a small amount of hot filling into eggs; return all to pan.', 'Bring to a gentle boil; cook and stir 2 minutes longer.', 'Remove from heat. Gently stir in butter and vanilla.', 'Press plastic wrap onto surface of custard; refrigerate, covered, 30 minutes.', 'Spread half of the custard into crust. Slice bananas; arrange over filling.', 'Pour remaining custard over bananas. Spread with whipped cream. Refrigerate 6 hours or overnight.']),
    // tslint:disable-next-line: max-line-length
    new Recipe('Chinese Wife Cake', ['250 g winter melon (strips, candied, chopped)', '60 g sesame seeds (toasted)', '91.6 g caster sugar', '80 g glutinous-rice flour (cooked)', '270 ml water', '2 tablespoons oil', '150 g high-protein flour (sifted)', '270 g plain flour', '1 tbs golden syrup', '200 g shortening', '1/4 tsp vanilla essence',  '1 egg beaten with 1/8 tsp salt'], ['Preheat oven at 180°C. Mix filling ingredients.', 'Divide into 60g portions.',  'Mix water dough ingredients. Set aside for 1/2 hour.', 'Divide into as many pieces as there are filling portions.', 'Mix flour and shortening. Place in plastic wrap and place in fridge for 1/2 hour. Divide into portions also.', 'Wrap oil dough in water dough. Roll flat into round pieces.',  'Place filling in dough and flatten. Brush egg glaze.  Place cakes on greased cookie sheet and bake at 180C for 20-25 minutes.'])
  ];
  addRecipe(newTitle: string, newIngredients: string, newDirections: string) {
    const newIngredientsArray = newIngredients.split(', ');
    const newDirectionsArray = newDirections.split(', ');
    this.newRecipe = new Recipe(newTitle, newIngredientsArray, newDirectionsArray);
    this.recipes.push(this.newRecipe);
  }
}
