import useStudents from "../../Hooks/UseStudent";
import "./style.css";

const StudentGrid = ({ onTileClick }) => {
  const { students, loading, error } = useStudents(
    "https://randomuser.me/api/?results=10"
  );

  return (
    <div className="student-grid">
      {students.map((student) => (
        <div key={student.id} className="student-grid-item">
          <div className="student-card">
            <div className="student-card-header">
              <div className="student-card-backgrond"></div>
              <img
                src={student.picture.large || "https://via.placeholder.com/150"}
                alt={student.name?.first}
                className="student-avatar"
              />
            </div>

            <div className="student-card-footer">
              <div className="student-stats">
                <div className="stat">
                  <p>{student.name?.first}</p>
                  <p>Name</p>
                </div>
                <div className="stat">
                  <p>{student?.registered?.age}</p>
                  <p>Age</p>
                </div>
              </div>
              <div className="student-actions">
                <button
                  className="action-btn"
                  onClick={() => onTileClick(student)}
                >
                  Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentGrid;
