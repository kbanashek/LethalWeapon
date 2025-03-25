import React, { useState } from "react";

interface SpeciesCardProps {
  name: string;
  image: string;
}

const SpeciesCard: React.FC<SpeciesCardProps> = ({ name, image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/20 cursor-pointer"
        onClick={openModal}
      >
        <div className="h-40 relative">
          <img
            src={image}
            alt={`${name} fishing in Key Largo`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "/LethalWeapon/images/fish-placeholder.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <h3 className="text-xl font-bold py-4 text-white">{name}</h3>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden">
            <button
              className="absolute top-4 right-4 bg-white rounded-full p-2 text-black hover:bg-gray-200 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <img
              src={image}
              alt={`${name} fishing in Key Largo`}
              className="max-h-[85vh] max-w-full object-contain"
              onError={(e) => {
                e.currentTarget.src =
                  "/LethalWeapon/images/fish-placeholder.jpg";
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 py-4 px-6">
              <h3 className="text-2xl font-bold text-white">{name}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SpeciesCard;
