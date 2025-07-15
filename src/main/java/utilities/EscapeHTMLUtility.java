package utilities;

public class EscapeHTMLUtility extends Utilities {
    public static String escapeHtml(String input) {
        if (input == null) return null;

        StringBuilder escaped = new StringBuilder();

        for (char c : input.toCharArray()) {
            switch (c) {
                case '<': escaped.append("&lt;"); break;
                case '>': escaped.append("&gt;"); break;
                case '&': escaped.append("&amp;"); break;
                case '"': escaped.append("&quot;"); break;
                case '\'': escaped.append("&#x27;"); break; // Or &apos; but not HTML4-compliant
                case '/': escaped.append("&#x2F;"); break; // Optional: helps against XSS
                default: escaped.append(c);
            }
        }

        return escaped.toString();
    }
}
