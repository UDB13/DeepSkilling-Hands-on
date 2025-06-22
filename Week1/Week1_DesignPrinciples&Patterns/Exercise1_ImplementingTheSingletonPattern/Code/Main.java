public class Main {
	public static void main(String[] args) {
		Logger log1 = Logger.getLogger();
		Logger log2 = Logger.getLogger();
		
		if (log1 == log2) {
			System.out.println("Singleton Pattern implemented Successfully");
		}
		else {
			System.out.println("Two instances detected. Implementation failed");
		}
	}
}
