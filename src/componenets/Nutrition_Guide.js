import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NutritionGuidance = () => {
  return (
    <div className="bg-light">

      {/* Introduction Section */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="font-weight-bold">What is Nutrition Guidance?</h2>
          <p className="lead">
            Nutrition guidance is about understanding the right food choices to fuel your body for optimal health, energy, and performance. Whether you are looking to lose weight, build muscle, or simply maintain a balanced diet, the right nutrition is key. Here, we provide helpful tips and recommendations for all ages and fitness levels.
          </p>
        </div>
      </section>

      <section className="bg-light py-5">
  <div className="container text-center">
    <h2 className="font-weight-bold text-primary mb-4">Nutrition Plans Based on Age & Weight</h2>
    <p className="lead text-muted">Your age and weight are important factors in determining your nutrition needs. Let's look at some guidelines for different categories.</p>

    {/* Age-Based Nutrition */}
    <div className="row mt-4">
      <div className="col-md-6 mb-4">
        <div className="card shadow-sm border-0">
          <img
            src="https://via.placeholder.com/500x300.png?text=Children's+Nutrition"
            alt="Children's Nutrition"
            className="card-img-top"
          />
          <div className="card-body">
            <h3 className="font-weight-bold text-primary">Nutrition for Children (Age 2-12)</h3>
            <p className="text-dark">
              Children require balanced meals to fuel their growth and development. Key nutrients for children include protein, healthy fats, and carbohydrates. Aim for a variety of fruits, vegetables, whole grains, and lean protein sources like chicken, fish, and beans. Limit processed sugar and focus on portion control.
            </p>
            <ul className="list-unstyled">
              <li><strong>Calories:</strong> 1,200-2,000 per day</li>
              <li><strong>Protein:</strong> 1.0-1.2 grams per kg of body weight</li>
              <li><strong>Fats:</strong> Healthy fats from avocados, olive oil, nuts</li>
              <li><strong>Carbs:</strong> Whole grains, fruits, vegetables</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-4">
        <div className="card shadow-sm border-0">
          <img
            src="https://via.placeholder.com/500x300.png?text=Teens+Nutrition"
            alt="Teen's Nutrition"
            className="card-img-top"
          />
          <div className="card-body">
            <h3 className="font-weight-bold text-primary">Nutrition for Teens (Age 13-19)</h3>
            <p className="text-dark">
              Teenagers need higher calorie intake to support growth, physical activity, and hormonal changes. A balanced diet rich in protein, complex carbs, and healthy fats will help with muscle development, brain function, and overall well-being. Include iron-rich foods like spinach and lean meats to prevent anemia.
            </p>
            <ul className="list-unstyled">
              <li><strong>Calories:</strong> 1,800-3,200 per day</li>
              <li><strong>Protein:</strong> 1.2-1.5 grams per kg of body weight</li>
              <li><strong>Fats:</strong> Avocados, nuts, seeds, fish oil</li>
              <li><strong>Carbs:</strong> Whole wheat, quinoa, brown rice</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Weight-Based Nutrition */}
    <div className="row mt-4">
      <div className="col-md-6 mb-4">
        <div className="card shadow-sm border-0">
          <img
            src="https://via.placeholder.com/500x300.png?text=Weight+Loss+Nutrition"
            alt="Weight Loss Nutrition"
            className="card-img-top"
          />
          <div className="card-body">
            <h3 className="font-weight-bold text-danger">Nutrition for Weight Loss</h3>
            <p className="text-dark">
              A well-balanced, calorie-controlled diet is key to weight loss. Focus on consuming nutrient-dense foods like lean protein, vegetables, and healthy fats. Avoid processed foods, added sugars, and excessive carbs. Incorporate physical activity to help with fat burning and muscle toning.
            </p>
            <ul className="list-unstyled">
              <li><strong>Calories:</strong> 1,500-1,800 per day (depending on activity level)</li>
              <li><strong>Protein:</strong> 1.5-2 grams per kg of body weight</li>
              <li><strong>Fats:</strong> Healthy fats from olive oil, nuts, and seeds</li>
              <li><strong>Carbs:</strong> Focus on complex carbs, limit refined carbs</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-4">
        <div className="card shadow-sm border-0">
          <img
            src="https://via.placeholder.com/500x300.png?text=Weight+Gain+Nutrition"
            alt="Weight Gain Nutrition"
            className="card-img-top"
          />
          <div className="card-body">
            <h3 className="font-weight-bold text-success">Nutrition for Weight Gain</h3>
            <p className="text-dark">
              If you're looking to gain weight, especially muscle mass, your focus should be on consuming more calories from nutrient-rich foods. Include protein-rich meals with healthy fats and carbohydrates, and eat more frequently to ensure a calorie surplus.
            </p>
            <ul className="list-unstyled">
              <li><strong>Calories:</strong> 2,500-3,000+ per day</li>
              <li><strong>Protein:</strong> 1.5-2 grams per kg of body weight</li>
              <li><strong>Fats:</strong> Nut butters, whole milk, fatty fish</li>
              <li><strong>Carbs:</strong> Brown rice, oats, sweet potatoes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Nutrient-Rich Foods */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="font-weight-bold">Nutrient-Rich Foods for Optimal Health</h2>
          <p className="lead">Incorporating a variety of nutrient-rich foods into your daily diet will help support your overall health and well-being. Here's a list of food categories to include in your meals.</p>

          <div className="row mt-4">
            <div className="col-md-4">
              <h4 className="font-weight-bold text-dark">Proteins</h4>
              <p className="text-dark">
                Proteins are essential for muscle repair and growth. Include lean meats, poultry, fish, eggs, tofu, beans, and legumes in your meals.
              </p>
              <ul className="list-unstyled">
                <li>Chicken breast, turkey, lean beef</li>
                <li>Salmon, tuna, trout</li>
                <li>Tofu, tempeh</li>
                <li>Beans, lentils, chickpeas</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4 className="font-weight-bold text-dark">Healthy Fats</h4>
              <p className="text-dark">
                Healthy fats support brain function, hormone production, and provide energy. Include sources like avocados, nuts, seeds, and olive oil in your diet.
              </p>
              <ul className="list-unstyled">
                <li>Avocados</li>
                <li>Almonds, walnuts, chia seeds</li>
                <li>Olive oil, coconut oil</li>
                <li>Fatty fish (salmon, mackerel)</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4 className="font-weight-bold text-dark">Carbohydrates</h4>
              <p className="text-dark">
                Carbs provide energy for daily activities and workouts. Opt for complex carbs from whole grains, vegetables, and fruits rather than refined sugars.
              </p>
              <ul className="list-unstyled">
                <li>Quinoa, brown rice, oats</li>
                <li>Sweet potatoes, squash</li>
                <li>Fruits: apples, bananas, berries</li>
                <li>Vegetables: broccoli, spinach, kale</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Meal Plan */}
      <section className="bg-white py-5">
        <div className="container text-center">
          <h2 className="font-weight-bold">Sample Meal Plan</h2>
          <p className="lead">Here is an example of a balanced meal plan that includes nutrient-dense foods for a day.</p>

          <div className="row mt-4">
            <div className="col-md-4">
              <h3 className="font-weight-bold">Breakfast</h3>
              <ul className="list-unstyled">
                <li>Scrambled eggs with spinach and avocado</li>
                <li>Whole grain toast with almond butter</li>
                <li>Fresh fruit (e.g., berries)</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3 className="font-weight-bold">Lunch</h3>
              <ul className="list-unstyled">
                <li>Grilled chicken salad with mixed greens</li>
                <li>Quinoa or brown rice</li>
                <li>Olive oil vinaigrette dressing</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3 className="font-weight-bold">Dinner</h3>
              <ul className="list-unstyled">
                <li>Baked salmon with roasted sweet potatoes</li>
                <li>Steamed broccoli</li>
                <li>Mixed greens salad</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NutritionGuidance;

