public class Logger {
	private static Logger log;
	
	private Logger() {
		System.out.println("Logger created");
	}
	
	public static Logger getLogger() {
		if(log == null) {
			log = new Logger();
		}
		return log;
	}
}
