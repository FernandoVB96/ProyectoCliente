import { useState, useEffect } from 'react';

interface Project {
    id: number;
    name: string;
    description: string;
    start_date: string;
    repository_url: string | null;
    picture: string | null;
    statusProjectName: string;
    technologies: string[];
    developers: string[];
}

interface ProjectListProps {
    testMode: boolean;
}

const Projects = ({ testMode }: ProjectListProps) => {
    const [page, setPage] = useState(0);
    const [posts, setPosts] = useState<Project[]>([]);
    const [totalPages, setTotalPages] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    const url: string = "http://localhost:8080/api/v1/projects";

    // Hacemos la petición cuando cambie la página o el término de búsqueda
    useEffect(() => {
        peticion(page, searchTerm);
    }, [page, searchTerm]);

    // Función para hacer la petición a la API usando el endpoint de búsqueda por nombre
    const peticion = async (p = 0, search = '') => {
        if (search && search.length < 3) return;

        const requestUrl = search
            ? `${url}/${search}`
            : `${url}?size=3&page=${p}`; 

        try {
            const response = await fetch(requestUrl);
            const data = await response.json();

            if (search) {
                // Verificamos si hay proyectos en la respuesta 
                const projects = data.data?.map((project: any) => ({
                    id: project.id,
                    name: project.name,
                    description: project.description,
                    start_date: project.start_date,
                    repository_url: project.repository_url,
                    picture: project.picture,
                    statusProjectName: project.statusProjectName,
                    technologies: project.technologies || [],
                    developers: project.developers || [],
                })) || [];
                
                setPosts(projects);
                setTotalPages(1);
            } else {
                // Si no hay búsqueda, asignamos los proyectos paginados
                setPosts(data.content?.map((project: any) => ({
                    id: project.id,
                    name: project.name,
                    description: project.description,
                    start_date: project.start_date,
                    repository_url: project.repository_url,
                    picture: project.picture,
                    statusProjectName: project.statusProjectName,
                    technologies: project.technologies || [],
                    developers: project.developers || [],
                })) || []); 
                setTotalPages(data.totalPages || 1);
            }
        } catch (error) {
            console.error('Error al hacer la búsqueda', error);
        }
    };

    // Función para eliminar un proyecto
    const handleDelete = async (id: number) => {
        const response = await fetch(`${url}/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            setPosts(posts.filter(project => project.id !== id));
        } else {
            console.error('Error al eliminar el proyecto');
        }
    };

    const ProjectCard = ({ project, test = false }: { project: Project; test?: boolean }) => {
        return (
            <div className="bg-[#2C3E3A] p-4 border-2 border-[#01251F] w-full h-full rounded-tl-2xl rounded-br-2xl hover:shadow-[0_8px_24px_rgba(1,37,31,0.8)] hover:scale-105 transition-all duration-300">
                {/* Imagen en la parte superior */}
                <div className="w-full h-40 mb-4 rounded-md overflow-hidden">
                    <img
                        src={project.picture ?? 'img/default-img.jpg'}  // Imagen por defecto si no hay imagen
                        alt={project.name}
                        className="w-full h-full object-cover"
                    />
                </div>
    
                {/* Título */}
                <h2 className="text-xl font-semibold text-[#F4F4F4] mb-2">{project.name}</h2>
    
                {/* Línea horizontal separadora */}
                <hr className="h-1 bg-gradient-to-r from-[#01251F] via-[#A0CBB2] to-[#F9A825] border-0 mb-4" />
    
                {/* Descripción */}
                <p className="text-[#F4F4F4]">{project.description}</p>
    
                {/* Botones */}
                <div className="mt-4 flex space-x-4">
                    {/* Botón para visitar el proyecto */}
                    {project.repository_url && (
                        <a
                            href={project.repository_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#A0CBB2] text-[#01251F] px-4 py-2 rounded-md hover:bg-[#F9A825] transition-all duration-300"
                        >
                            Visit Project
                        </a>
                    )}
    
                    {/* Botón de eliminar */}
                    {test && (
                        <button
                            onClick={() => handleDelete(project.id)}
                            className="bg-red-500 text-[#F4F4F4] px-4 py-2 rounded-md hover:bg-red-600 transition-all duration-300"
                        >
                            Delete
                        </button>
                    )}
                </div>
            </div>
        );
    };

    return (
        <>
            {/* Barra de búsqueda centrada */}
            <div className="mb-6 flex justify-center">
                <input
                    type="text"
                    placeholder="Buscar por nombre"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && peticion(page, searchTerm)}
                    className="w-full max-w-xs p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
            </div>

            {/* Lista de proyectos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((project) => (
                    <ProjectCard key={project.id} project={project} test={testMode} />
                ))}
            </div>

            {/* Botones de navegación con transiciones */}
            <div className="mt-6 flex justify-center items-center space-x-4">
                <button
                    onClick={() => setPage(page - 1)}
                    disabled={page === 0}
                    className="bg-[#01251F] text-[#F4F4F4] px-6 py-3 rounded-lg disabled:bg-[#A0CBB2] disabled:text-[#01251F] hover:bg-[#F9A825] transition-all duration-300 transform hover:scale-105"
                >
                    Previous Page
                </button>

                {/* Número de página actual con estilo */}
                <span className="text-[#F4F4F4] text-lg">{page + 1}</span>

                <button
                    onClick={() => setPage(page + 1)}
                    disabled={page >= totalPages - 1}
                    className="bg-[#01251F] text-[#F4F4F4] px-6 py-3 rounded-lg disabled:bg-[#A0CBB2] disabled:text-[#01251F] hover:bg-[#F9A825] transition-all duration-300 transform hover:scale-105"
                >
                    Next Page
                </button>
            </div>
        </>
    );
};

export default Projects;
