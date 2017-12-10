using Newtonsoft.Json.Linq;

namespace BurgerApp.Database
{
    public interface IFirebase
    {
        string Post(string tableName, JToken content);
        JObject Get(string tableName);
    }
}
