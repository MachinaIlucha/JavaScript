const getMessagesForPassedStudents = (allStudents, failedStudents) => allStudents
        .filter(name => !failedStudents.includes(name))
        .map(name => 'Good job, ' + name);;