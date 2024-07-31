
export const Create = () => {
  return (
    <div>
      <h2>Enter the data</h2>

      <form>
        <div>
          <input type="text" name="name" placeholder="enter name" />
        </div>
        <div>
          <input type="email" name="email" placeholder="enter email" />
        </div>
        <div>
          <input type="number" name="age" placeholder="enter age" />
        </div>
        <div>
          <input type="radio" name="gender" value="Male" />
          <label>Male</label>
          <input type="radio" name="gender" value="Female" />
          <label>Female</label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
