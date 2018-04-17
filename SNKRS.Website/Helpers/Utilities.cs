using System.Text.RegularExpressions;
using System.Web;
using System.Xml.Linq;

namespace SNKRS.Helpers
{
    public class Utilities
    {
        public static string TransformSVG(string url)
        {
            XDocument doc = XDocument.Load(HttpContext.Current.Server.MapPath(url));
            return Regex.Replace(doc.ToString(), @"\t|\n|\r", "");
        }
    }
}