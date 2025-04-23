using BookStore.Core.Models;

namespace BookStore.DataAccess.Repositories
{
    public interface IBooksRepository
    {
        Task<Guid> Create(Books book);
        Task<Guid> Delete(Guid id);
        Task<List<Books>> Get();
        Task<Guid> Update(Guid id, string title, string description, decimal price);
    }
}
