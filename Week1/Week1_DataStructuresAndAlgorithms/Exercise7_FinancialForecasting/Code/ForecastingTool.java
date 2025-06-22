public class ForecastingTool {

    public static double predictFutureValue(int years, double initialValue, double growthRate) {
        if (years == 0) {
            return initialValue;
        }
        return predictFutureValue(years - 1, initialValue, growthRate) * (1 + growthRate);
    }

    public static void main(String[] args) {
        double initialValue = 10000;
        double growthRate = 0.08;
        int years = 5;

        double result = predictFutureValue(years, initialValue, growthRate);
        System.out.printf("Predicted value after %d years: \u20B9%.2f%n", years, result);
    }
}
