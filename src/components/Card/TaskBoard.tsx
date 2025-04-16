import { useMemo, useState } from 'react';
import TaskCard from '@/components/Card/TaskCard.tsx';

const add = 'https://cdn-icons-png.flaticon.com/128/3524/3524384.png';
const info = 'https://cdn-icons-png.flaticon.com/128/2311/2311524.png';

const statuses = ['to-do', 'on-progress', 'in-review', 'completed'];
const statusColors: Record<string, string> = {
  'to-do': 'bg-gray-400',
  'on-progress': 'bg-yellow-400',
  'in-review': 'bg-purple-500',
  'completed': 'bg-green-500',
};

const getRandom = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateTask = (i: number) => ({
  id: `T-${i + 1}`,
  title: getRandom([
    'Design Landing Page UI',
    'Fix Login Authentication Bug',
    'Write Project Documentation',
    'Update API Integration',
    'Review Client Feedback',
    'Implement Dark Mode',
    'Refactor Dashboard Components',
    'Prepare Sprint Demo Slides',
    'Optimize Image Loading',
    'Test User Registration Flow',
  ]),
  description: getRandom([
    'Create a clean and modern UI for the main landing page.',
    'Investigate and resolve the login issue affecting some users.',
    'Draft comprehensive documentation for the entire project.',
    'Ensure the frontend communicates correctly with the new API.',
    'Go through all client comments and plan required updates.',
    'Allow users to toggle between light and dark themes.',
    'Improve code structure and remove redundant components.',
    'Prepare slides and talking points for the upcoming sprint demo.',
    'Compress and lazy load all images to boost performance.',
    'Run tests on the signup process to catch edge-case errors.',
  ]),
  priority: getRandom(['High', 'Low']),
  type: getRandom(['Design', 'Front-End', 'Back-End', 'Research', 'Database']),
  progress: getRandomInt(0, 100),
  comments: getRandomInt(0, 30),
  links: getRandomInt(0, 20),
  assignees: [
    `https://randomuser.me/api/portraits/men/${getRandomInt(1, 20)}.jpg`,
    `https://randomuser.me/api/portraits/women/${getRandomInt(1, 20)}.jpg`,
  ],
  image: getRandom([
    'https://cdn.dribbble.com/userupload/42915893/file/still-76b4cfbc6a027e9e2c69b15da5ffd1f7.png?format=webp&resize=320x240&vertical=center',
    'https://cdn.dribbble.com/userupload/42914539/file/still-4b8337ac8b34269a6ee3124a3603787c.png?format=webp&resize=320x240&vertical=center',
    'https://cdn.dribbble.com/userupload/42912386/file/still-d4f4f6b4cb3f83c079ba5a5bbceff211.png?format=webp&resize=320x240&vertical=center',
    'https://cdn.dribbble.com/userupload/42767175/file/original-3e97ec3ccf1e6d8e4a1da427bd2ed443.png?format=webp&resize=320x240&vertical=center',
    'https://cdn.dribbble.com/userupload/14304492/file/original-23efe3a073e56382354e74ded5e1a89a.png?format=webp&resize=320x240&vertical=center',
    'https://cdn.dribbble.com/userupload/3508947/file/original-a95f9f8bc2b21952dc57828f81d738f5.png?format=webp&resize=320x240&vertical=center',
    'https://cdn.dribbble.com/userupload/16623608/file/original-8075a16e54249252f8246c3a3937d187.jpg?format=webp&resize=320x240&vertical=center',
    'https://cdn.dribbble.com/userupload/16493177/file/original-bb5ced4b43fd4811cc623bf0c4e8cea0.png?format=webp&resize=320x240&vertical=center',
    'https://cdn.dribbble.com/userupload/38999186/file/still-3d100a81a9204e56cbd9773189904dc4.png?format=webp&resize=320x240&vertical=center',
    'https://cdn.dribbble.com/userupload/6676527/file/original-82c4089dc9eba523df18ad35cca7fd09.png?format=webp&resize=320x240&vertical=center',
    'https://cdn.dribbble.com/userupload/17355785/file/original-6a792aad9eaad945ce75bf3488914fed.png?format=webp&resize=320x240&vertical=center',
    'https://cdn.dribbble.com/userupload/25281989/file/still-b21549618c5b3b000155c532a7d161bb.png?format=webp&resize=320x240&vertical=center',
    'https://cdn.dribbble.com/userupload/18679698/file/original-fe86385585625c969c2b8b3d8e103e22.jpg?format=webp&resize=320x240&vertical=center',
    'https://cdn.dribbble.com/userupload/7461116/file/still-df2c4c909036bb88715cda5f2f144599.png?format=webp&resize=320x240&vertical=center',
    'https://cdn.dribbble.com/userupload/16571614/file/original-1e6581c4d3d65e8d7a324c491775700f.png?format=webp&resize=320x240&vertical=center',
    'https://cdn.dribbble.com/userupload/42932088/file/still-9e78b5a17d2668408cfdbd473768719f.png?format=webp&resize=1200x900&vertical=center',
    'https://cdn.dribbble.com/userupload/42930964/file/original-1c025e638806edae1c6e98d063227b1b.jpg?format=webp&resize=320x240&vertical=center',
  
  ]),
  status: getRandom(statuses),
});

function TaskBoard() {
  const [showModal, setShowModal] = useState<string | null>(null);
  const [tasks, setTasks] = useState(() => Array.from({ length: 40 }, (_, i) => generateTask(i)));

  const groupedTasks = useMemo(() => {
    return statuses.reduce((acc, status) => {
      acc[status] = tasks.filter((task) => task.status === status);
      return acc;
    }, {} as Record<string, ReturnType<typeof generateTask>[]>);
  }, [tasks]);

  const addTask = (status: string) => {
    const newTask = generateTask(tasks.length);
    newTask.status = status;
    setTasks((prev) => [...prev, newTask]);
    setShowModal(null);
  };

  return (
    <div className="mt-0 bg-[url('/images/white.jpg')] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5 min-h-screen">
      {statuses.map((status) => (
        <div key={status} className="bg-gray-100 rounded-lg shadow-md p-4 space-y-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-1">
              <span className={`w-1.5 h-4 rounded-sm ${statusColors[status]}`}></span>
              <h2 className="flex items-center font-bold text-sm capitalize">
                {status}
                <span className="ml-2 px-2 py-0.5 text-xs text-gray-700 bg-gray-300 rounded-sm">
                  {groupedTasks[status].length}
                </span>
              </h2>
            </div>

            <div className="flex items-center gap-1">
              <span
                role="button"
                tabIndex={0}
                className="w-4 h-4 rounded-sm bg-cover bg-center cursor-pointer hover:scale-110 transition-transform"
                style={{ backgroundImage: `url(${add})` }}
                onClick={() => setShowModal(status)}
              ></span>
              <span
                className="w-4 h-4 rounded-sm bg-cover bg-center"
                style={{ backgroundImage: `url(${info})` }}
              ></span>
            </div>
          </div>

          {groupedTasks[status].map((task) => (
            <TaskCard key={task.id} {...task} />
          ))}

          {/* Modal */}
          {showModal === status && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-4 rounded-md shadow-lg w-80">
                <h3 className="text-lg font-bold mb-2">Add new task to "{status}"</h3>
                <p className="text-sm mb-4 text-gray-500">Here i can add input tag for adding card components</p>
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setShowModal(null)}
                    className="px-3 py-1 text-sm rounded bg-gray-200 hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => addTask(status)}
                    className="px-3 py-1 text-sm rounded bg-blue-500 text-white hover:bg-blue-600"
                  >
                    Add Task
                  </button>
                </div>
              </div>
            </div>
          )}
<span
  tabIndex={0}
  className="flex items-center justify-center gap-2 cursor-pointer hover:scale-110 transition-transform h-7 ml-2 px-2 py-0.5 text-xs text-gray-700 bg-gray-300 rounded-sm"
  onClick={() => setShowModal(status)}
>
  <div
    className="w-4 h-4 bg-cover bg-center rounded-sm"
    style={{ backgroundImage: `url(${add})` }}
  ></div>
  Add New
</span>

        </div>
        
      ))}
    </div>
  );
}

export default TaskBoard;
