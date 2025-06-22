public class Main {
	public static void main(String[] args) {
		DocumentFactory wordfactory = new WordDocumentFactory();
		Documents worddoc = wordfactory.createDocument();
		worddoc.open();
		
		DocumentFactory pdffactory = new PdfDocumentFactory();
		Documents pdfdoc = pdffactory.createDocument();
		pdfdoc.open();
		
		DocumentFactory excelFactory = new ExcelDocumentFactory();
        Documents excelDoc = excelFactory.createDocument();
        excelDoc.open();
	}
}
