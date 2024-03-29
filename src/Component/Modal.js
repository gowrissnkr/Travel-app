const Modal = ({ handleClose, formData }) => {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    className="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    Booking Confirmation
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      CarType : {formData.carName}
                    </p>
                    <p className="text-sm text-gray-500">
                      Name : {formData.customerName}
                    </p>
                    <p className="text-sm text-gray-500">
                      Mobile : {formData.customerPhone}
                    </p>
                    <p className="text-sm text-gray-500">
                      PickUp : {formData.customerPickupLocation}
                    </p>
                    <p className="text-sm text-gray-500">
                      Drop : {formData.customerDropLocation}
                    </p>
                    <p className="text-sm text-gray-500">
                      Schedule Time :{" "}
                      {formData.travelDateAndTime.split("T").join(" Time ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                onClick={handleClose}
                type="button"
                className="inline-flex w-full justify-center bg-green-400 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
