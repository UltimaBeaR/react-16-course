namespace BurgerApp.Database
{
    public interface IFirebase
    {
        string Post(string tableName, string content);
    }
}
